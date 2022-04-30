import React from 'react';
import "./Slide.css";
import reviewList from "./reviewList";
import Slide from './Slide';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
export default function EachReview(props){

    function LessThan(){

    }
    function GreaterThan(){
        
    }
        
        return <section>
            <div className='Icon'> 
            <FaAngleLeft onClick={LessThan}/>
            <p>Slide</p>
            <FaAngleRight onClick={GreaterThan}/>
            </div>
            <div className='MainFrame'>
             
            <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/EW_CoursePoster.png" 
                        title="Mod Creation 1: Epic Weapons"
                        paragraph="In this popular Minecraft modding course, students will design and code a series of over the top weapons, including our infamous Cow Cannon!"
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/BaB_CoursePoster.png" 
                        title="Mod Creation 1: Build and Boom!"
                        paragraph="In this explosive coding course, students will design and code a custom structure and then create massive explosions using Java! Students will deepen their understanding of loops."
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/house_in_a_box_600x600.png" 
                        title="Mod Creation 1: House In A Box"
                        paragraph="In this popular mod, students will design and code a house that appears instantly with code. Students will deepen their understanding of parameters, variables, array lists, and loops."
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/infinite-items-thumb.png" 
                        title="Mod Creation 1: Infinite Items 1.12"
                        paragraph="In this fiery course, students will customize the AI of their creature (from Create A Creature) to create a fearsome fireball attack. Students will learn about Artificial Intelligence and randomization"
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />

                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/ai_and_fireballs_thumb.jpg" 
                        title="Mod Creation 1: Artificial Intelligence and Fireballs"
                        paragraph="In this fiery course, students will customize the AI of their creature (from Create A Creature) to create a fearsome fireball attack. Students will learn about Artificial Intelligence and randomization"
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/minecraft_dragon_rider.png" 
                        title="Mod Creation with Minecraft: Dragon Rider"
                        paragraph="Make your own custom fire-ball-shooting Ender dragon and equip it with armor! Learn and practice with conditionals, loops, variables, methods, and more!"
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/BoxArtCropped.png" 
                        title="Mod Creation 1 with Minecraft 1.8"
                        paragraph="This Minecraft coding course is CodaKid's original Mod Creation classic and provides a whopping 35+ hours of award-winning student projects. We cover key concepts such as parameters, variables, conditional, loops, and arrays."
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
                    <Slide 
                        image="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/courses/DimensionsCropped.png" 
                        title="Mod Creation 2 with Minecraft 1.8"
                        paragraph="This creative and captivating Minecraft coding course teaches students how to make 3 custom dimensions in Minecraft. We cover more advanced methods, loops, and conditionals."
                        age="8"
                        LastImage="https://i0.wp.com/codakid.com/wp-content/themes/bb-theme-child/images/front/logo-images/minecraft.png"
                    />
            </div>
        </section>;

}






































{/* <div className='Slide divSlide1'><p>My 8-year-old daughter has started having coding lessons and I must say that she has learned a lot. She has fun during the lessons and enjoys learning new things! It has been an interesting journey and I really do hope that she will continue coding! Thank you!</p></div>
        <div className='Slide divSlide2'><p>My 8-year-old daughter has started having coding lessons and I must say that she has learned a lot. She has fun during the lessons and enjoys learning new things! It has been an interesting journey and I really do hope that she will continue coding! Thank you!</p></div>
        <div className='Slide divSlide3'><p>My 8-year-old daughter has started having coding lessons and I must say that she has learned a lot. She has fun during the lessons and enjoys learning new things! It has been an interesting journey and I really do hope that she will continue coding! Thank you!</p></div>
        <div className='Slide divSlide4'></div>
        <div className='Slide divSlide5'></div>
        <div className='Slide divSlide6'></div>
        <div className='Slide divSlide7'></div>
        <div className='Slide divSlide8'></div>
        <div className='Slide divSlide9'></div>
        // <div className='Slide divSlide10'></div> */}
        // {reviewList.map((Eachlist) => {return <EachReview 
        //     image={Eachlist.image}
        //     name={Eachlist.name}
        //     company={Eachlist.company}
        //     content={Eachlist.content} />})}