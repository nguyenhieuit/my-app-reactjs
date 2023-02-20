import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

export default function Animal() {
    const [listAnimal, setListAnimal] = useState();
    // let param = useParams();
    // let value = "";
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));

    useEffect(() => {
        fetch("http://localhost:8000/animal")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setListAnimal(data);
            });
    }, []);

    function renderListAnimal(e) {
        if (checkLogin) {
            if (listAnimal) {
                return listAnimal.map((value) => {
                    return (
                        <>
                            <li>
                                <div className="item-animal">
                                    <img
                                        src={value["image"]}
                                        alt="img-animal"
                                    />
                                    <div className="item-animal-infor">
                                        <h2>{value["name"]}</h2>
                                        <span>
                                            Môi trường sống: {value["habitat"]}
                                        </span>
                                        <p>Mô tả: {value["description"]}</p>
                                    </div>
                                </div>
                            </li>
                        </>
                    );
                });
            }
        } else {
            return (
                <>
                    <h1>You not login. Please login!</h1>
                </>
            );
        }
    }

    // function onClickCategory(e) {
    //     value = e.target.id;
    //     console.log(value);
    // }

    return (
        <>
            <div className="animal-page">
                <div className="animal-sidebar">
                    <h2>Category</h2>
                    <ul>
                        <li>
                            <p id="fish">List fish</p>
                        </li>
                        <li>
                            <p id="bird">List bird</p>
                        </li>
                    </ul>
                </div>
                <div className="animal-content">
                    <h1>Animal</h1>
                    <div className="list-animal">
                        <ul>{renderListAnimal()}</ul>
                    </div>
                </div>
            </div>
        </>
    );
}
