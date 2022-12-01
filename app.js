const ItemCtrl=(function (){
    const item=function (id,name,cal){
        this.id=id
        this.name=name
        this.cal=cal
    }
})
const UICtrl=(function (){
    return{
        populateItemList: function (item){
            items.forEach(function (item){
                html+=`<li id='item-${item.id}'>
                <strong>${item.name}    `
            })
        }
    }
})

const App=(function (){
    return{
        init: function (){
            const items=ItemCtrl.getItem()
            UICtrl.populateItemList
        }
    }
}) (ItemCtrl, UICtrl)