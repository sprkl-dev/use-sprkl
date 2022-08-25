import {useContext} from "react";
import {AppContext} from "../App";
import {ReactComponent as Icon} from "../assets/icon.svg";

export default function Orders() {
    const state = useContext(AppContext)
    const {orders} = state;

    return (
        <div className="orders">
            <div className="orders__list">
                <table style={{width: '100%'}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Products</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(i => (
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td>{(i.items || []).join(', ')}</td>
                                <td>{i.state}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}