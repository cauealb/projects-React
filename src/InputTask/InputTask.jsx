

export default function InputTask() {
    return (
            <div class="inputTask">
                <input onChange={changeTask} type="text" />
                <div>
                    <XIcon onClick={clickCreateTask} size={27} class="XIcon" color="#C257A4" />
                    <CheckIcon onClick={addTask} size={27} class="CheckIcon" color="#fff" />
                </div>
            </div>
        )
} 