const managerQuestions = [
    {
        type: 'input',
        name: 'manager-name',
        message: "what is the manager's name?\n",
        validate: (res) => {
            if (res) return true;
            if (!res) return "Please enter a manager's name.";
        },
    },
    {
        type: 'input',
        name: 'manager-id',
        message: "Enter manager employee id.\n",
        validate: (res) => {
            if
    }
]