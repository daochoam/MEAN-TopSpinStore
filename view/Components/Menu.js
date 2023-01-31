class MenuElement extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top">
                <a class="navbar-brand" href="#">
                    <a href="#" target="_blank"><img src="./Images/Logo.png" color="white" width="50" height="50"
                            class="d-inline-block align-top" alt=""></a>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto" id="MenuElement">
                        <li class="nav-item active btn_home">
                            <a class="nav-link g_font" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item btn_blade">
                            <a class="nav-link g_font" href="./Blades.html">Blades</a>
                        </li>
                        <li class="nav-item btn_rubber">
                            <a class="nav-link g_font" href="./Rubbers.html">Rubbers</a>
                        </li>
                        <li class="nav-item btn_ball">
                            <a class="nav-link g_font" href="./Balls.html">Balls</a>
                        </li>
                        <li class="nav-item btn_table">
                            <a class="nav-link g_font" href="./TablesNets.html">Tables/Nets</a>
                        </li>
                    </ul>
                    <div class="icon-bar" id="Login_Success"></div>
                    <div id="login-button">
                        <a class="link-secondary" href="#" aria-label="Login">
                            <lord-icon src="https://cdn.lordicon.com/bhfjfgqz.json"
                                trigger="hover"
                                colors="primary:#fff">
                            </lord-icon>
                        </a>
                    </div>
                </div>
            </nav>
        </header>`;
    }
}

customElements.define("menu-component",MenuElement)