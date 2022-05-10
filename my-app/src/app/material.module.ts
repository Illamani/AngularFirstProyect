import { NgModule } from "@angular/core";
import { MatToolbarModule} from "@angular/material/toolbar"
import { MatCardModule } from "@angular/material/card"
import { MatIconModule} from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule  } from "@angular/material/form-field"
import { MatRadioModule } from "@angular/material/radio"
import { MatOptionModule } from "@angular/material/core"
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
 
@NgModule({
    exports : [
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatOptionModule,
        MatInputModule,
        MatSelectModule,
    ]
})
export class MaterialModule{}