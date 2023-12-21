import { SocialLinks } from "@components/react/ui/atoms/social_links"

export const Footer = () => {
    return (
        <div className="pt-[30px] relative">

            <footer className="bg-[#091833] px-[15px] pt-[10px]">
                <div className="container mx-auto">

                    <div className="p-[25px]">
                        <h3 className="text-[#fff] text-[2rem] font-bold">
                            En construccion 🚧
                        </h3>

                        <div className="flex justify-center gap-4">
                            <h4 className="text-[#fff]">Mis Redes</h4>
                            <SocialLinks />
                        </div>

                    </div>


                    <div className="grid justify-center p-[10px]">
                        <p className="text-center small-text-helper">
                            Portfolio Diego Bello
                        </p>
                        <p className="text-center small-text-helper">
                            Desarrollador web | Diego Alexander Guatibonza Bello | TsukiiYamero
                        </p>

                        <p className="text-center small-text-helper">
                            &copy; Copyright 2023. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
