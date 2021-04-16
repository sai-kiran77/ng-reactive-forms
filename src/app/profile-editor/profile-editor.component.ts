import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators,FormArray } from '@angular/forms'
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  //using formGroup
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })

  //using formBuilder
  // profileForm = this.formBuilder.group({
  //   firstName:['',Validators.required],
  //   lastName:[''],
  //   address:this.formBuilder.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   })
  // })

  //using FormArray
  profileForm = this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:[''],
    address:this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  })

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  updateProfileWithPatch() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
    console.log(this.profileForm.value)
  }
}
