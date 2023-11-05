import { Component } from '@angular/core';

@Component({
  selector: 'port-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent {

  skills: any[] = [
    { name: 'HTML', src: '../../assets/skills/HTML5.png' },
    { name: 'CSS', src: '../../assets/skills/CSS3.png' },
    { name: 'Javascript', src: '../../assets/skills/JavaScript.png' },
    { name: 'Typescript', src: '../../assets/skills/TypeScript.png' },
    { name: 'Angluar', src: '../../assets/skills/Angluar.png' },
    { name: 'React Native', src: '../../assets/skills/React_Native.png' },
    { name: 'Vue', src: '../../assets/skills/Vue.png' },
    { name: 'Flutter', src: '../../assets/skills/Flutter.png' },
    { name: 'Dart', src: '../../assets/skills/Dart.png' },
    { name: 'Java', src: '../../assets/skills/Java.png' },
    { name: 'SQL', src: '../../assets/skills/SQL.png' },
  ];

}
