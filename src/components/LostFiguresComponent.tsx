import { memo } from "react";
import { Board } from "../models/Board";
import { Figure } from "../models/figures/Figure";

type Props = {
    figures: Figure[];
}

const LostFiguresComponent: React.FC<Props> = ({figures}) => {
    return (
        <div className='lost-figures'>
            {figures && figures.map(figure => (
                <div className="lost-figure" key={figure.id}>
                    {figure.logo && <img src={figure.logo} width={30} height={30} alt={figure.name} /> }
                </div>
            ))}
        </div>
    )
}

export default LostFiguresComponent;  