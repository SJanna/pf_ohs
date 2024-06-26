import { ReactElement } from "react";

export default function QuestionnaireResponseLayout({children}: {children: ReactElement }): ReactElement {
    return (
        <div className="w-full lg:w-1/2 mx-auto">
            <div className="rounded-2xl border shadow-default mt-4">
                <div className="flex justify-center p-5">
                    {children}
                </div>
            </div>
        </div>
    )
}