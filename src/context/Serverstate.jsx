import { useEffect, useState } from "react";
import Servercontext from "./Servercontext";
const Serverstate = (props) => {
    //sSKILLS SERVER API
    const host = "http://localhost:5000";
    const [Skills, setSkills] = useState([]);
    //fetch all Notes
    useEffect(() => {
        const GetSkills = async () => {
            //API CALL 
            const response = await fetch(`${host}/api/other/fetchskills`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            setSkills(json);
        }
        GetSkills();
        return;
    }, [Skills.length])

    //Add skill
    const AddSkill = async (title, tag, level) => {
        //TO-DO API CALL 
        const response = await fetch(`${host}/api/other/addskills`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, tag, level })
        });
        //Client side logic
        // console.log("Adding a new note");
        const skill = await response.json();
        setSkills(Skills.concat(skill));
    }
    //Update skill
    const EditSkill = async (id, title, tag, level) => {
        const response = await fetch(`${host}/api/other/updateskills/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, tag, level })
        });
        // eslint-disable-next-line
        const json = await response.json();
        //Logic for client side
        let newSkill = JSON.parse(JSON.stringify(Skills));
        for (let index = 0; index < newSkill.length; index++) {
            const element = newSkill[index];
            if (element._id === id) {
                newSkill[index].title = title;
                newSkill[index].tag = tag;
                newSkill[index].level = level;
                break;
            }
        }
        setSkills(newSkill);
    }

    //DeleteSkill
    const Deleteskill = async (id) => {
        // eslint-disable-next-line
        const response = await fetch(`${host}/api/other/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const newskill = Skills.filter((skill) => { return skill._id !== id });
        setSkills(newskill);
    }

    //PROJECT SERVER API
    //GET PROJECTS
    const [Projects, setProjects] = useState([])
    useEffect(() => {
        async function getrecords() {
            const data = await fetch(`${host}/api/project/fetchproject`);
            if (!data.ok) {
                window.alert("error");
                return;
            }
            const records = await data.json();
            records.reverse();
            setProjects(records);
        }
        getrecords();
        return;
    }, [Projects.length]);
    //ADD Projects
    const AddProjects = async (title,description, tag, github,live) => {
        //TO-DO API CALL 
        const response = await fetch(`${host}/api/project/addproject`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title,description, tag,github,live})
        });
        //Client side logic
        // console.log("Adding a new note");
        const project = await response.json();
        setProjects(Projects.concat(project));
    }
    //Update Projects
    const EditProject = async (id,title,description, tag, github,live) => {
        const response = await fetch(`${host}/api/project/update/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title,description, tag,github,live})
        });
        // eslint-disable-next-line
        const json = await response.json();
        //Logic for client side
        let newProject = JSON.parse(JSON.stringify(Projects));
        for (let index = 0; index < newProject.length; index++) {
            const element = newProject[index];
            if (element._id === id) {
                newProject[index].title = title;
                newProject[index].description = description;
                newProject[index].tags = tag;
                newProject[index].link1 = github;
                newProject[index].link2 = live;
                break;
            }
        }
        setProjects(newProject);
    }
    //DeleteProjects
    const DeleteProject = async (id) => {
        // eslint-disable-next-line
        const response = await fetch(`${host}/api/Project/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const newProject = Projects.filter((Project) => { return Project._id !== id });
        setProjects(newProject);
    }

    return (
        <Servercontext.Provider value={{ Skills, Projects, Deleteskill, AddSkill ,EditSkill,AddProjects,EditProject,DeleteProject}}>
            {props.children}
        </Servercontext.Provider>
    )
}

export default Serverstate