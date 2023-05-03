import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script2 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script3 from "../89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/src/item"
import Script4 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script5 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(6.5, 10, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.9282426834106445, 0.8047819137573242, 6.354483604431152)
})
clickArea.addComponentOrReplace(transform6)

const toolbox = new Entity('toolbox')
engine.addEntity(toolbox)
toolbox.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(30, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolbox.addComponentOrReplace(transform7)

const elevator = new Entity('elevator')
engine.addEntity(elevator)
elevator.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(6.5, 0, 25),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
elevator.addComponentOrReplace(transform8)
const gltfShape2 = new GLTFShape("e9064c81-38af-4d68-b127-c23c165a40c3/elevator_05.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
elevator.addComponentOrReplace(gltfShape2)

const clickArea2 = new Entity('clickArea2')
engine.addEntity(clickArea2)
clickArea2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(6.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.643387794494629, 0.5863637924194336, 4.258847713470459)
})
clickArea2.addComponentOrReplace(transform9)

const floor = new Entity('floor')
engine.addEntity(floor)
floor.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(6.5, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floor.addComponentOrReplace(transform10)
const gltfShape3 = new GLTFShape("31f127e2-4cfc-4572-9822-982af17d1e7a/floor.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
floor.addComponentOrReplace(gltfShape3)

const redButton = new Entity('redButton')
engine.addEntity(redButton)
redButton.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(14.5, 1.1325187683105469, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3150807619094849, 1.3150807619094849, 1.3150807619094849)
})
redButton.addComponentOrReplace(transform11)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(21, 10.04808235168457, 23.5),
  rotation: new Quaternion(9.460419508324977e-15, -0.9238795638084412, 1.1013501222123523e-7, 0.3826834261417389),
  scale: new Vector3(10.914409637451172, 10.914406776428223, 10.914409637451172)
})
plainText.addComponentOrReplace(transform12)

const plane = new Entity('plane')
engine.addEntity(plane)
plane.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(25.5, 3.383152961730957, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plane.addComponentOrReplace(transform13)
const gltfShape4 = new GLTFShape("6c778355-7526-40c6-9c76-eebddd56096a/plane.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
plane.addComponentOrReplace(gltfShape4)

const buttonStand = new Entity('buttonStand')
engine.addEntity(buttonStand)
buttonStand.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(14.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49085867404937744, 0.49085867404937744, 0.49085867404937744)
})
buttonStand.addComponentOrReplace(transform14)
const gltfShape5 = new GLTFShape("a31a6087-995d-4d5d-af9c-ef5f281daf52/button_stand.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
buttonStand.addComponentOrReplace(gltfShape5)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(14.5, 0, 7.957526683807373),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6412749290466309, 1.0812509059906006, 0.6319785118103027)
})
invisibleWall.addComponentOrReplace(transform15)

const characterWalk = new Entity('characterWalk')
engine.addEntity(characterWalk)
characterWalk.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(18.5, 0, 20),
  rotation: new Quaternion(6.724049079033859e-15, 0.9951847195625305, -1.1863524917998802e-7, -0.09801721572875977),
  scale: new Vector3(1.906747817993164, 1.9067420959472656, 1.906747817993164)
})
characterWalk.addComponentOrReplace(transform16)
const gltfShape6 = new GLTFShape("aaa09e73-4f23-4ee6-8592-684d5a265d6e/character_walk.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
characterWalk.addComponentOrReplace(gltfShape6)

const characterDance = new Entity('characterDance')
engine.addEntity(characterDance)
characterDance.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(24.139902114868164, 0, 20),
  rotation: new Quaternion(-5.020151673106477e-15, 0.9951847791671753, -1.1863524207456067e-7, -0.0980171486735344),
  scale: new Vector3(2.045851945877075, 2.045846939086914, 2.045851945877075)
})
characterDance.addComponentOrReplace(transform17)
const gltfShape7 = new GLTFShape("a9cd3991-53a2-4e05-a423-b82067a0acd7/character_dance.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
characterDance.addComponentOrReplace(gltfShape7)



const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script1.spawn(clickArea, {"enabled":true,"onClickText":"down","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"elevator","x":0,"y":-9.5,"z":0,"curve":"easeinoutsine","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":10,"onTimeout":[]}}]}}]}, createChannel(channelId, clickArea, channelBus))
script2.spawn(toolbox, {}, createChannel(channelId, toolbox, channelBus))
script1.spawn(clickArea2, {"enabled":true,"onClickText":"up","button":"POINTER","onClick":[{"entityName":"toolbox","actionId":"move","values":{"target":"elevator","x":0,"y":9.5,"z":0,"curve":"easeinoutsine","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox","actionId":"delay","values":{"timeout":5,"onTimeout":[{"entityName":"toolbox","actionId":"move","values":{"target":"elevator","x":0,"y":-9.5,"z":0,"curve":"easeinoutsine","speed":10,"relative":true,"onComplete":[]}}]}}]}}]}, createChannel(channelId, clickArea2, channelBus))
script3.spawn(redButton, {"onClick":[{"entityName":"toolbox","actionId":"print","values":{"message":"welcome to steezy arts\n","duration":5,"multiplayer":true}}]}, createChannel(channelId, redButton, channelBus))
script4.spawn(plainText, {"text":"Temperature\nParis, France  51°F","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script5.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))


import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import resources from './resources'
import { AliceDialog } from './modules/dialogData'

export const alice = new NPC(
  {
    position: new Vector3(4, 0, 6.5),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.alice,
  () => {
    // animations
    alice.playAnimation('Hello', true, 2)

    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
        alice.playAnimation('Talk')
      })
    )
    engine.addEntity(dummyent)

    // sound
    alice.addComponentOrReplace(new AudioSource(resources.sounds.alice))
    alice.getComponent(AudioSource).playOnce()

    // dialog UI
    alice.talk(AliceDialog)
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/alice.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  }
)