

let num = prompt('create blocks')

for (let i = 0; i < num; i++) {
    let color = '';

    if (i%3===0) {
        color = 'red'
    } else if(i%3===1){
        color = 'yellow'
    } else{
        color = 'green'
    }
    if (i>9) break
    document.write(`<div class="block" style= " background-color: ${color};"></div>`)
}