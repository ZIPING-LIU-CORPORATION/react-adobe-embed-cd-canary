const colorMapFromName = {
    'yellow': '33m',
    'green': '32m',
    'red': '31m',
    'blue': '34m',
    'cyan': '36m',
    'magenta': '35m',
    'gray': '90m',
    'lightgray': '37m',
    'black': '30m',
    
}   

const tasks: Cypress.Tasks = {
    

    logToConsole({
        header = '',
        message,
        color = 'gray',
        tab = '   '
    }: {
        message: string,
        header?: string,
        color?: keyof typeof colorMapFromName,
        tab?: string
    }
        ) {

  
       
        
        // console.log(tab, message);
        // Log as color
        const messageString = `\x1b[${colorMapFromName[color]}${message}\x1b[0m`;
        const headerStringBold = `\x1b[1m${header}\x1b[0m`;
        console.log(tab,headerStringBold, messageString);
        return null;
    }

    

}

export default tasks;