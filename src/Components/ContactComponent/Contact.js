import { useState } from 'react';
import axios from 'axios'; 

const Contact = () => {
    const [ posts , setPosts ]=useState([]);
    const api = "https://jsonplaceholder.typicode.com/posts";
    axios.get(api).then((response)=>{
        setPosts(response.data);
    }).catch((error)=>{
        console.log(error);
    })
    return (

    <>
      <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12 pt-4" style={{"min-height":"400px"}}>
                    <h3 class="text-primary text-uppercase">// Contact Page //</h3>
                    <h3 class="text-primary text-uppercase">// DUMMY JSON //</h3>
                    <table>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                        {
                        posts.map((post) => (
                            <tr>
                                <th>{post.userId}</th>
                                <th>{post.id}</th>
                                <th>{post.title}</th>
                                <th>{post.body}</th>
                        </tr>
                        ))
                    }
                    </table>
                    {/* <h1 class="mb-4"><span class="text-primary">CarServ</span> Is The Best Place For Your Auto Care</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed temporibus omnis quia dolorem nemo iste aperiam totam, consectetur aliquam perspiciatis maxime id delectus recusandae impedit, est officia, sequi reprehenderit adipisci iusto dicta. Perspiciatis veniam modi doloremque voluptate delectus est saepe at libero maiores. Rerum, ipsam quidem cumque explicabo officia reiciendis? Illum fuga eius quibusdam sed incidunt veritatis tenetur, voluptatum rem esse suscipit id unde exercitationem officia ullam dicta quas assumenda! Delectus at asperiores error, assumenda rerum commodi eum repudiandae vitae expedita magnam? Ducimus quo cumque ad dignissimos omnis inventore consequatur ullam officiis animi eaque ab, alias sunt odio dolore praesentium!</p>*/}
                </div> 
            </div>
        </div>
    </div>
    </>
    );
}
export default Contact;