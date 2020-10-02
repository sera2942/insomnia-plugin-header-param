// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/26-plugins

// TODO: Add plugin code here...

module.exports.templateTags = [{
    name: 'getHeaderParamByKeyFromString',
    displayName: 'getHeaderParamByKeyFromString',
    description: 'get header parameter by key from string',
    args: [
        {
            displayName: 'HeaderName',
            description: 'Header Name',
            type: 'string'
        }, 
        {
            displayName: 'Headers',
            description: 'Headers List',
            type: 'string'
        }
    ],
    async run (context, name, headers) {

        if (!name) {
            throw 'Name is not defined'
        }

        if (!headers) {
            throw 'Headers is not defined'
        }

        var headerList =  headers.split(' ');

        if(headerList) {
            var regexp = RegExp('^' + name + ':');

            for (i = 0; i < headerList.length; i++) {
                if (regexp.test(headerList[i])) {
                    return headerList[++i];
                }
            }
        } 

        throw 'Nothing is found';      
    }
}];