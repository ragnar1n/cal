const ItemCtrl=(function (){
    const item=function (id,name,cal){
        this.id=id
        this.name=name
        this.cal=cal
    }
    const data={
        items: [
            {id:0,name:'Water',cal:0},
            {id:1,name: 'Cookie',cal: 50},
            {id:2,name: 'Potato',cal: 70}
        ],
        total:0
    }
    return{
        logData: function (){
            return data
        }
    }
})()

const UICtrl=(function (){
    const UICtrl=(function (){
        const UISelectors={
            itemList:'#item-list',
            itemName:'#item-name',
            itemCal:'#item-cal',
            addBtn:'add-btn'
        }
    })
    return{
        populateItemList: function (items){
            items.forEach(function (item){
                html+=`<li id='item-${item.id}'>
                <strong>${item.name}:</strong><em>${item.cal} Calories</em>
                <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
                </a>
                </li>`
            })
            document.querySelector(UISelectors.itemList).innerHTML=html;
        },
        getSelectors: function (){
            return UISelectors
        }
    }
})

const App=(function (){
    const loadEL=function (){
        const UISelectors=UICtrl.getSelectors()
        console.log(UISelectors)
    }
    return{
        init: function (){
            console.log('initializing')
            const items=ItemCtrl.getItem()
            UICtrl.populateItemList(items)
            loadEL()
        }
    }
}) (ItemCtrl, UICtrl)

App.init()
