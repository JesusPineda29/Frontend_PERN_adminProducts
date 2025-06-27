import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"


export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-slate-800">
                <div className="mx-auto max-w-6xl py-10 px-4">
                    <h1 className="text-4xl font-extrabold text-white">Administrador de Productos</h1>
                </div>
            </header>

            <main className="flex-1">
                <div className="mx-auto max-w-6xl w-full px-4 py-10">
                    <div className="bg-white shadow rounded-xl p-8">
                        <Outlet />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
