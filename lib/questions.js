module.exports = {
    managerQuestions: [
        {
            type: 'input',
            name: 'manager_name',
            message: "Please enter manager's name\n",
            validate: (res) => {
                if (res) {
                    return true;
                }
                return "Please enter manager's name";
            },

        },
    ]
}
]
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
    {
        type: 'input',
        name: 'manager_id',
        message: "Please enter manager employee id.\n",
        validate: (res) => {
            if (isNaN(res)) {
                return 'Please eneter a valid employee id number';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'manager_email',
        message: "Please enter manager's email address.\n",
        validate: (res) => {
            validEmail =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-
                9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-
                    9])?)*$/.test(
                        res
                    );
                    if (validEmail) {
                        return true;
                    }
                    return 'Please enter valid email address.';
                };
    },

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
            name: 'manager_officeNum',
            message: "Please eneter the manager's office number.\n",
            validate: (res) => {
                if (isNaN(res)) {
                    return 'Please enter valid office number.';
                }
                return true;
        },
    },
],
    engineerQuestions: [
        {
            type: 'input',
            name: 'enginner_name',
            message: "Please enter enginner's name.\n",
            validate: (res) => {
                if (res) {
                    return true;
                }
                return "Please enter a engineer's name.";
            },
        },
        {
            type: 'input',
            name: 'engineer_id',
            message: "please enter engineer's employee id number.\n",
            validate: (res) => {
                if(isNaN(res)) {
                    return 'Please enter a valid employee id number.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'engineer_email',
            message: "Please enter engineer's email address.\n",
            validate: (res) => {
                validEmail =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-
                    9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-
                        9])?)*$/.test(
                            res 
                        );
           
                       
         if (validEmail) {
            return true;
         }
         return 'Please enter a valid email address.';
        },

        {
            type: 'input',
            name: 'engineer_github',
            message: "Please enter engineer's github username.\n",
        },
    ],

    internQuestions: [
        {
            type: 'input',
            name: 'intern_name',
            message: "Please enter intern's name.\n",
            validate: (res) =>{
                if (res) {
                    return true;
                }
                return "Please enter intern's name.";
            },
        },
        {
            type: 'input',
            name: 'intern_id',
            message: "Please enter intern's employee id number.\n",
            validate: (res) => {
                if (isNaN(res)) {
                    return 'Please enter a valid employee id number.';
                }
                return true;
            },
        },
    {
        type: 'input',
        name: 'intern_email',
        message: "Please enter intern's email address.\n",
        validate: (res) => {
            validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-
                9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-
                    9])?)*$/.test(
                        res
                    );
                    if (validEmail) {
                        return true;
                    }
                    return 'Please enter valid email address.';
                },
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school did intern attend or is currently enrolled?\n',
            },
    ],
    };
    
