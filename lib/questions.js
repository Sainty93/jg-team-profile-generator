const managerQuestions = [
    {
        type: 'input',
        name: 'manager-name',
        message: "what is the manager's name?\n",
        validate: (res) => {
            if (res) {
                return true;
            }
            return "Please enter a manager's name.";
        },
    },
    {
        type: 'input',
        name: 'manager-id',
        message: "Enter manager employee id.\n",
        validate: (res) => {
           if (isNaN(res)) {
            return 'Please entera valid employee ID number';
           }
           return true;
        },
    },
    {
        type: 'input',
        name: 'manager-email',
        message: "Please enter manager's email address.\n",
        validate: (res) => {
            const validEmail = 
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]
                {0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-
                    9])?)*$/.test(
                        res
                    );
                    if (validEmail) {
                        return true;
                    }
                    return 'Please enter a valid email address.';
        },
    },
    {
        type: 'input',
        name: 'manager-officeNum',
        message: "Please enter the manager's office Number.\n",
        validate: (res) => {
            if (isNaN(res)) {
                return 'Please enter an office number.';
            }
            return true;
        },
    },

];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineer-name',
        message: "Please enter engineer's name.\n",
        validate: (res) => {
            if (res) return true;
            if (!res) return "Please enter engineer's name.";
    },
},
{
    type: 'input',
    name: 'engineer-email',
    message: "Please enter engineer's email address.\n",
    validate: (res) => {
        const validEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]
            {0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-
                9])?)*$/.test(
                    res
                );
                if (validEmail) return true;
                if (!validEmail) return 'Please enter a valid email address.';
    },
},
{
    type: 'input',
    name: 'engineer-github',
    message: "Please enter engineer's github username.\n",
},
];

const internQuestions = [
    {
        type: 'input',
        name: 'intern-name',
        message: "Please enter intern's name.\n",
        validate: (res) => {
            if (res) return true;
            if (!res) return "Please enter an intern's name.";
            validate: (res) => {
                if (isNaN(res)) return 'Please eneter a valid employee id number.';
                else return true;
            },
        },
        {
            type: 'input',
            name: 'intern-email',
            message: "please enter intern's email address.\n",
            validate: (res) => {
                const validEmail =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]
                    {0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-
                        9])?)*$/.test(
                            res
                        );

                        if (validEmail) {
                            return true;
                        }
                       return "Please enter Intern's name.";
                    },
         },
         {
            type: 'input',
            name: 'school',
            message: 'What school did the intern attend or is currently enrolled?\n',
         },
        
    
];

module.exports = questions;