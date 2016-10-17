// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { observable, runInAction } from 'mobx';

import MarkdownIt from 'markdown-it';
import mdAttrs    from 'markdown-it-attrs';

import CSSModules from 'react-css-modules';
import style from './style.less';

type Props = {
    className: string,
    inline: boolean,
    content: string
};

// ## //

@observer
@CSSModules(style, { allowMultiple: true })
export default class Markdown extends React.Component {
    props: {
        className?: string,
        inline?: boolean,
        content: string
    };

    @observable markdown: Object;
    @observable inlineMarkdown: Object;

    constructor(props: Props) {
        super(props);

        runInAction(() =>{
            // Classic Markdown
            this.markdown = new MarkdownIt({
                html: false,
                linkify: true,
                typographer: true,
                quotes: ['«\xA0', '\xA0»', '‹\xA0', '\xA0›']
            });

            this.markdown.use(mdAttrs);

            // Inline Markdown
            this.inlineMarkdown = new MarkdownIt({
                html: false,
                linkify: false,
                typographer: true,
                quotes: ['«\xA0', '\xA0»', '‹\xA0', '\xA0›']
            });

            this.inlineMarkdown
            .use(mdAttrs)
            .disable('image');

            var defaultLink = this.inlineMarkdown.renderer.rules.link_open ||
                function(tokens, idx, options, env, self) {
                    return self.renderToken(tokens, idx, options);
                };

            this.inlineMarkdown.renderer.rules.link_open = (tokens, idx, options, env, self) => {
                tokens[idx].tag = 'span';
                return defaultLink(tokens, idx, options, env, self);
            };
        })
    }

    rawMarkup(value: string, inline?: boolean) {
        let result;

        if (!value) {
            result = '';
        }

        else if (inline) {
            result = this.inlineMarkdown.renderInline(value);
        }

        else {
            result = this.markdown.render(value);
        }

        return {
            __html: result
        };
    }

    render() {
        return (
            <div
                styleName='markdown'
                className={ this.props.className }
                /* eslint-disable react/no-danger */
                dangerouslySetInnerHTML={ this.rawMarkup(this.props.content, this.props.inline) }
                /* eslint-enable react/no-danger */
            >
            </div>
        );
    }
}
