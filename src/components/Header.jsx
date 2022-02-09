import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import HeaderData from "../data/HeaderData";
import Logo from "./Logo";
import ButtonAdmin from "./ButtonAdmin";
import { AuthContext } from "../contexts/authContext";

/**
 * NavBar version desktop et mobile
 *
 * @return {*}
 * Importation de Disclosure pour Ouvrir/fermer le burger en responsive
 * Ternaire pour passer en responsive
 * Map pour afficher tous les menus
 * Bouton d'admin joint
 */
const Header = () => {
  const authContext = useContext(AuthContext);

  return (
    <Disclosure
      as="nav"
      className="border-b-2 border-b-neutral-200 sticky top-0 bg-white shadow-md shadow-vert/20"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pr-4">
            <div className="flex justify-end mt-3">
              {authContext.token && (
                <ButtonAdmin type="header" HeaderData={HeaderData} />
              )}
            </div>
            <div className="relative flex items-center justify-between pb-2">
              {/* positionnement burger */}
              <div className="absolute inset-y-0 right-0 sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-vert focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center pl-4 sm:justify-between">
                <Link to={HeaderData.menus[0].to}>
                  <Logo data={HeaderData.logo} />
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-8 lg:space-x-14">
                    {HeaderData.menus.map((item) => (
                      <Link
                        to={item.to}
                        key={item.name}
                        className="transition hover:text-rose text-h2 text-vert"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="bg-vert flex flex-col p-4 gap-8">
              {HeaderData.menus.map((item) => (
                <Link to={item.to} key={item.name}>
                  <Disclosure.Button className="text-h2 text-blanc">
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
