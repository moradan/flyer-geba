export default function Presentacion() {
    return (
        <>
            <header>
                <h2>
                    Interclubes 2024
                </h2>
            </header>
            <ul className="list-group-flush p-0">
                <li className="list-group-item">
                    <header>
                        <h3>
                            Primera Fecha
                        </h3>
                    </header>
                    <section>
                        <h4>Local</h4>
                        <ul className="list-group-flush p-0">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-2">
                                        11:00
                                    </div>
                                    <div className="col-5">
                                        tenis club argentino-A
                                    </div>
                                    <div className="col-5">
                                        caballeros +70 primera-A
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h4>Visitante</h4       >
                        <ul className="list-group-flush p-0">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-2">
                                        09:00
                                    </div>
                                    <div className="col-5">
                                        centro deportivo huracan-A
                                    </div>
                                    <div className="col-5">
                                        varones sub 14 nivel B
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </li>
            </ul>
        </>
    );
}