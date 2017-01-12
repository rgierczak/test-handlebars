(function (root) {
    'use strict';
    
    class Application {
        constructor() {
            this.context = {
                name: 'Rafał Gierczak',
                occupation: 'JavaScript Developer'
            };
            
            this.render();
        }
        
        render() {
            $.get({
                url: 'templates/template.hbs',
                cache: true,
                success: (template) => this.successHandler(template),
                error: (message) => this.errorHandler(message)
            });
        }

        errorHandler(message) {
            throw new Error('Unable to render HandleBars template: ', message);
        }

        successHandler(template) {
            let $body = $(document.body);
            let $html = $(template).html();
            let templateScript = root.Handlebars.compile($html);
            $body.append(templateScript(this.context));
        }
    }
    
    new Application();
}(window));
