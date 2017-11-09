function toggleMenu() {
    if(document.getElementById('menu-to-toggle').style.display != 'block') {
        document.getElementById('menu-to-toggle').style.display = 'block'
        return
    }
    document.getElementById('menu-to-toggle').style.display = 'none'
}
