import "../App.css"

export default function Header(){
    const myNav = [
        {id:1,text:"تواصـل معـنا"},
        {id:1,text:"التقيــمـات"},
        {id:1,text:"المشـاريـع"},
        {id:1,text:"وسائل التواصل"},
        {id:1,text:"الرئيسـية"},


    ];

    const navList = myNav.map((nav =>{
        return (
                <nav key={nav.id}>
                    <ul>
                    <li><a href="#">{nav.text}</a></li>
                    </ul>
                </nav>
        )
    }));
    return (
        <header>
            {navList}
        </header>
    );
}