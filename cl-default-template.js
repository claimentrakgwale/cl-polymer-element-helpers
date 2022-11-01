
let clDefaultTemplateHolder;

export const clDefaultTemplate = function () {
    if( void 0 === clDefaultTemplateHolder || null === clDefaultTemplateHolder ) {
        let template = document.createElement("template");
        template.innerHTML = "";
        return clDefaultTemplateHolder = template;
    }

    return clDefaultTemplateHolder;
};
