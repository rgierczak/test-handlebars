(function (root) {
    'use strict';
    
    class Application {
        constructor() {
            this.context = {
                name: 'Rafał Gierczak',
                occupation: 'JavaScript Developer'
            };
            
            this.fetchTemplate();
        }
        
        fetchTemplate() {
            $.get({
                url: 'templates/template.hbs',
                cache: true,
                success: (template) => {
                    this.render(template);
                },
                error: (message) => {
                    throw new Error('Unable to render HandleBars template: ', message);
                }
            });
        }

        render(template) {
            let $body = $(document.body);
            let $html = $(template).html();
            let templateScript = root.Handlebars.compile($html);
            $body.append(templateScript(this.context));
        }
    }
    
    new Application();
}(window));
