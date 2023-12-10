import { App } from "../App";
import { useForm } from "react-hook-form";
import classNames from "classnames";

export const Cadastro = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Faça o que você deseja com os dados do formulário quando ele for submetido
        console.log(data);
    };

    return (
        <App>
            <div className="container mx-auto mt-10">
                <h1>Comment</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classNames("mb-4", { 'has-error': errors.nome })}>
                        <input
                            id="nome"
                            type="text"
                            placeholder="Nome"
                            {...register('nome', { required: true })}
                            
                        />
                        {errors.nome && <span>Este campo é obrigatório</span>}
                    </div>

                    <div className={classNames("mb-4", { 'has-error': errors.email })}>
                        <input
                            id="email"
                            type="email"
                            placeholder="E-mail"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span>Este campo é obrigatório</span>}
                    </div>

                    <div className={classNames("mb-4", { 'has-error': errors.senha })}>
                        <input
                            id="senha"
                            type="password"
                            placeholder="Senha"
                            {...register('senha', { required: true })}
                        />
                        {errors.senha && <span>Este campo é obrigatório</span>}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Criar uma nova conta    
                    </button>
                    <span className="text-sm">Já possui uma conta? <a href="">Acesse agora!</a></span>
                </form>
            </div>
        </App>
    );
        
};