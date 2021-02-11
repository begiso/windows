import React, { Component } from 'react'
import PropsCard from './PropsCard'
import instagram from './img/instagram.webp'
import vk from './img/vk.png'
import skype from './img/skype.png'
import shareit from './img/shareit.png'
import player from './img/Nox-App-Player.png'
import DrWeb from './img/1-4.png'
import Stacks from './img/BlueStacks.png'
import Samsung from './img/Galereya-Samsung.png'
import Koran from './img/Koran-1.png'
import Wallet from './img/QIWI-Koshelek.png'
import Drive from './img/OneDrive.png'
import Paint from './img/Paint-3D.png'
import Trello from './img/Trello.png'
import Yandex from './img/YAndeks.Karty-1.png'

class ThirdBlock extends Component {
    state = {
        rows: [
            { img: instagram, title: 'Instagram', middleTitle: 'Free' },
            { img: vk, title: 'VKontakte', middleTitle: 'Free' },
            { img: skype, title: 'Skype', middleTitle: 'Free' },
            { img: shareit, title: 'SHAREit', middleTitle: 'Free' },
            { img: player, title: 'Nox App Player', middleTitle: 'Free' },
            { img: DrWeb, title: 'Dr Web', middleTitle: 'Free' },
            { img: Stacks, title: 'Blue Stacks', middleTitle: 'Free' },
            { img: Samsung, title: 'Samsung Gallery', middleTitle: 'Free' },
            { img: Koran, title: 'Blue Koran', middleTitle: 'Free' },
            { img: Wallet, title: 'QIWI Wallet', middleTitle: 'Free' },
            { img: Drive, title: 'OneDrive', middleTitle: 'Free' },
            { img: Paint, title: 'Paint 3D', middleTitle: 'Free' },
            { img: Trello, title: 'Trello', middleTitle: 'Free' },
            { img: Yandex, title: 'Yandex Maps', middleTitle: 'Free' },
        ]
    }

    render() {
        return (
            <div className='container_nets '>
                {this.state.rows.map((row) => {
                    return (
                        <PropsCard
                            img={row.img}
                            title={row.title}
                            middleTitle={row.middleTitle}
                        />
                    )
                })}

            </div>
        )
    }
}
export default ThirdBlock 