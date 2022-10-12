import React, { useId } from 'react'

export default function App() {

    const id1 = useId()
    const id2 = useId()
    const id3 = useId()

    return (
        <>
            <h2>React - useId</h2>
            <hr />
            <form action="#" method="post">
                <div>
                    <h3>Escolha um sexo</h3>
                </div>
                <div>
                    <input type="checkbox" name="check_masculino" id={id1} />
                    <label htmlFor={id1}>Masculino</label>
                </div>
                <div>
                    <input type="checkbox" name="check_feminino" id={id2} />
                    <label htmlFor={id2}>Feminino</label>
                </div>
                <div>
                    <input type="checkbox" name="check_outro" id={id3} />
                    <label htmlFor={id3}>Outro</label>
                </div>
            </form>
        </>
    )
}