import { useForm } from "react-hook-form";
import { useCart } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "./Loader";
import { useState } from "react";

function CheckoutForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { cart, getTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleClear = () => {
        reset();
    };

    const handleSubmitForm = async (data) => {
        if (cart.length) {
            setLoading(true);
            const order = {
                buyer: {
                    name: data.name,
                    email: data.mail,
                    phone: data.phone
                },
                total: getTotal(),
                items: cart,
                data: serverTimestamp()

            }

            const id = await createOrder(order);
            setLoading(false);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Se registró su compra correctamente!",
                text: `ID: ${id}`,
                confirmButtonText: "OK",
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    clearCart()
                    navigate("/");
                }
            })
        }
        else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Por favor ingrese productos al carrito",
                showConfirmButton: false,
                timer: 3000,
                allowOutsideClick: false
            }).then(() => {
                navigate("/");
            })

        }

    };
    return (
        <div className="form-container">
            <div className="loader">
                <Loader loading={loading}></Loader>
            </div>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label>Nombre</label>
                <input {...register('name', { required: "Este es un campo obligatorio" })}
                    placeholder="Ingrese sus nombres" autoComplete="off" />
                {errors.name && <p role="alert">{errors.name.message}</p>}

                <label>Dirección de email</label>
                <input
                    {...register("mail", {
                        required: "Este es un campo obligatorio", pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Introduzca una dirección válida de correo electrónico",
                        },
                    })}
                    aria-invalid={errors.mail ? "true" : "false"}
                    placeholder="Ingrese su correo electrónico" autoComplete="off" />
                {errors.mail && <p role="alert">{errors.mail.message}</p>}
                <label>Celular</label>
                <input {...register('phone', { required: "Este es un campo obligatorio" })}
                    placeholder="Ingrese su nro de celular" autoComplete="off" />
                {errors.phone && <p role="alert">{errors.phone.message}</p>}
                <div className="actions">
                    <button type="button" onClick={handleClear}>Limpiar</button>
                    <button type="submit">Comprar</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;