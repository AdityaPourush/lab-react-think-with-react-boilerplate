let container = document.getElementById('react-container')
// container.innerText = "Hello! JS!"

ReactDOM.render("Hello! Welcome to React!", container)

// let h1_tag = document.createElement('h1');
// h1_tag.innerText = "Hello! Welcome to JS!";
// container.appendChild(h1_tag)

let H1_Tag = React.createElement(
    'h1',
    {id: "h1-tag"},
    "Hello!",
    React.createElement("div", null, "Welcome to React!")
) 

// ReactDOM.render(H1_Tag, container);


// Iteration 2

function ReactContainer () {
    
    // let h1Tag = React.createElement(
    //     'h1',
    //     {id: "h1-tag"},
    //     "Hello!",
    //     React.createElement("div", null, "Welcome to React!")
    // )
    return React.createElement(
        'h1',
        {id: "h1-tag"},
        "Hey Kalvians! Welcome to React Learning",
        React.createElement("div", null, "Let's rock and roll"));
}

// ReactDOM.render(ReactContainer(), container);


//Iteration 3

class KalviumContainer extends React.Component{
    render() {
        return React.createElement(
            'h1',
            {id: "h1-tag"},
            "Hey Kalvians",
            React.createElement("div", null, "Let's rock and roll"));
    }
}

ReactDOM.render(React.createElement(KalviumContainer), container)