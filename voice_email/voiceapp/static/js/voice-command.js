// Voice command definitions
const commands = {
    'hello': function() {
        alert('Hello there!');
    },
    'open inbox': function() {
        window.location.href = '/inbox/';
    }
};

annyang.addCommands(commands);