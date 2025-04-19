const SignUp = () => {
    return (<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Account aanmaken
                <span className="text-red-500"> TussenOns</span>
            </h1>

            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Naam</span>
                    </label>
                    <input type="text" placeholder="Vul je naam + achternaam in" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Gebruikersnaam</span>
                    </label>
                    <input type="text" placeholder="Vul je gebruikersnaam in" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Wachtwoord</span>
                    </label>
                    <input type="password" placeholder="Vul je wachtwoord in" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Herhaal wachtwoord</span>
                    </label>
                    <input type="password" placeholder="Herhaal je wachtwoord" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label htmlFor="gender" className="label p-2">
                        <span className="text-base label-text">Geslacht</span>
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        className="w-full select select-bordered h-10"
                        defaultValue=""
                    >
                        <option value="" disabled hidden>
                            Selecteer je geslacht
                        </option>
                        <option value="male">Man</option>
                        <option value="female">Vrouw</option>
                    </select>
                </div>

                <a className="text-sm text-red-500 hover:underline mt-2 inline-block">{"Al"} een account?</a>
                <div>
                    <button className="btn btn-block btn-sm mt-2">Account aanmaken</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SignUp