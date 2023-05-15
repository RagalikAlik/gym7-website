import '../style/App.css';

const options =[
    {
        value: 'акции',
        label: 'Акции'
    },
    {
        value: 'абонемент',
        label: 'абонемент'
    }
]

export function HeaderTemplate(){
    return(
        <nav class="header">
            <div class="nav-items">
                <h1>amogus</h1>
                <div class="nav-buttons">
                    <div class="dropdown">
                        <button class="dropbtn">Акции</button>
                        <div class="dropdown-content">
                            <a href="#">Акции</a>
                            <a href="#">абонемент с тренером - 100 руб.</a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
}