

export default function useHeader() {

    function incrementTaskFinish(id) {

        const newList = listTasks.map(item => {
            console.log(item)
            if(item.id === id) {
                return {...item, finish: true}
            }
            return item;
        })

        setListTasks(newList)
    }


    return {
        taskFinish,
        incrementTaskFinish
    }

}