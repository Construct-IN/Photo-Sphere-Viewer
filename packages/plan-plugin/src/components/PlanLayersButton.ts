import layersIcon from '../icons/layers.svg';
import { AbstractPlanButton, ButtonPosition } from './AbstractPlanButton';
import type { PlanComponent } from './PlanComponent';

export class PlanLayersButton extends AbstractPlanButton {

    private select: HTMLSelectElement;

    constructor(plan: PlanComponent) {
        super(plan, ButtonPosition.VERTICAL);

        const title = this.viewer.config.lang['mapLayers'];

        this.container.title = title;
        this.container.innerHTML = layersIcon;

        this.select = document.createElement('select');
        this.select.className = 'psv-plan__layers-select';
        this.select.setAttribute('aria-label', title)

        const placeholder = document.createElement('option');
        placeholder.disabled = true;
        placeholder.innerText = title;
        this.select.appendChild(placeholder);

        this.select.addEventListener('change', () => {
            plan.setLayer(this.select.value);
            this.__setSelected();
        })

        this.container.appendChild(this.select);

        this.hide();
    }

    setLayers(layers: string[]) {
        this.show();

        layers.forEach((title) => {
            const option = document.createElement('option');
            option.value = title;
            option.innerText = title;
            this.select.appendChild(option);
        });

        this.select.value = layers[0];
        this.__setSelected();
    }

    private __setSelected() {
        this.select.querySelector<HTMLElement>('[selected]')?.removeAttribute('selected');
        this.select.querySelector<HTMLElement>(`[value="${this.select.value}"]`).setAttribute('selected', 'selected');
    }
}
