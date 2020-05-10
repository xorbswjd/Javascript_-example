function dragStart_(e){
    var parentNode = e.target.parentElement;
    e.dataTransfer.setDragImage(parentNode,0,0);    
    e.dataTransfer.setData('targetId',e.target.parentElement.id);
}
function dragOver_(e){
    e.preventDefault();
}
function drop_(e){
    var targetId = e.dataTransfer.getData('targetId');
    e.preventDefault();
    e.target.appendChild(document.getElementById(targetId));
}