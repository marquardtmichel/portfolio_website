import { Component } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'port-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  words = ['Web Developer', 'Mobile Developer', 'Frontend Developer']

  id = "tsparticles";

  
  particlesOptions = {
    fullScreen: {
      zIndex: -1
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: ClickMode.repulse
        },
        onHover: {
          enable: true,
          mode: HoverMode.connect,
          parallax: {
            enable: false,
            force: 60,
            smooth: 10
          }
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
          speed: 3
        },
        connect: {
          distance: 80,
          lineLinked: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "random"
      },
      lineLinked: {
        blink: false,
        color: "#ffffff",
        consent: false,
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200
          }
        },
        bounce: false,
        direction: MoveDirection.none,
        enable: true,
        outMode: OutMode.out,
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true
        },
        limit: 500,
        value: 300
      },
      opacity: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 1,
          sync: false
        },
        random: false,
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false
        },
        random: true,
        value: 5
      }
    },
    polygon: {
      draw: {
        enable: false,
        lineColor: "#ffffff",
        lineWidth: 0.5
      },
      move: {
        radius: 10
      },
      scale: 1,
      type: "none",
      url: ""
    },
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  }

particlesLoaded(container: Container): void {
  console.log(container);
}

async particlesInit(engine: Engine): Promise<void> {
  console.log(engine);
  await loadFull(engine);
}

}

