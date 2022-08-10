const Header = () => {

    return (

        <header class="region region-header l-region l-region--header" role="banner" aria-label="Site Header">
            <il-header view="full">
                <div slot="wordmark">
                    <il-unit-wordmark>
                        <p class="il-primary-unit">
                            <a href="https://aces.illinois.edu/">College</a>
                        </p>
                        <h1><a href="/">Department</a></h1>
                    </il-unit-wordmark>
                </div>
            </il-header>
        </header>

        /*<header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Learn React
        </a>
            </header> */


    )

}

export default Header;