import classes from "./Navbar.module.css";

const Navbar=()=>{
    return(
        <>
            <header className={classes.navbar} >
                <p className={classes.head}>Swap.techi</p>
            </header>
            <div className={classes.design}/>
        </>
    );
}

export default Navbar;
