function openDetails(sql, topicName) {
    let tabContent = document.getElementsByClassName('tabContent');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    let tabLinks = document.getElementsByClassName('tabLinks');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', ' ');
    }
    document.getElementById(topicName).style.display = 'block';
    sql.currentTarget.className += " active";
}