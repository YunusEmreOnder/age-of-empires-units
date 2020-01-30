export const costFilterData = {
    filter: (units, filterData) => {
        let array = []
        units.filter(e => { 
         if(
             ((filterData.status.wood) && (e.cost !== null && e.cost.Wood > filterData.wood.min && e.cost.Wood < filterData.wood.max))
             ||
             ((filterData.status.food) && (e.cost !== null && e.cost.Food > filterData.food.min && e.cost.Food < filterData.food.max))
             ||
             ((filterData.status.gold) && (e.cost !== null && e.cost.Gold > filterData.gold.min && e.cost.Gold < filterData.gold.max) )
             )
             array.push(e)
             return e
        })
        return array
    }
}
