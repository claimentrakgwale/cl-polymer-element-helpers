let clDefaultStyleHolder;
export const clDefaultStyle = function () {
	if(void 0 === clDefaultStyleHolder || null === clDefaultStyleHolder) {
		let template = document.createElement("template");
		template.innerHTML = `
		<style>
			a, abbr, address, article, aside, audio, b, blockquote, body, button, canvas, caption, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, input, textarea, select, option, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, u, ul, var, video {
	         	margin: 0;
	         	padding: 0;
	        	border: 0;
	          	background: transparent;
	        }

	        article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	          	display: block;
	        }

	        div {
	          	font-family: inherit;
	        }

	        a.remove-default-style {
	          	text-decoration: none;
	        }

	        ul.remove-default-style {
	          	list-style-type: none
	        }

	        [disabled] {
	          	cursor: default
	        }

	        [hidden] {
	          	display: none !important;
	        }
		</style>
		`;
		return clDefaultStyleHolder = template;
	}

	return clDefaultStyleHolder;
};