import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl) {
    //const regex = new RegExp(/[A-Z]g/)
    const autoria = control.value as string;
    if(autoria === autoria.toUpperCase()) {
        return null;
    } else{
      return { minusculo: true };
    }

}
