import React from "react";
import Filters from "./Filters";
import Job from "./Job";
import config from "./config";

interface JobData {
  provider: string;
  topology: string;
  version: string;
  connectivity: string;
  size: string;
  ingressController: string;
  jobStatusImageUrl: string;
  jobUrl: string;
}

const data: JobData[] = config.jobs;

const App = () => {
  const [providers, setProviders] = React.useState<string[]>([]);
  const [versions, setVersions] = React.useState<string[]>([]);
  const [topologies, setTopologies] = React.useState<string[]>([]);
  const [sizes, setSizes] = React.useState<string[]>([]);
  const [ingressControllers, setIngressControllers] = React.useState<string[]>([]);
  const [connectivities, setConnectivities] = React.useState<string[]>([]);

  const filterJobs = (job: JobData) => {
    const providerMatch = providers.length === 0 || providers.includes(job.provider);
    const topologyMatch = topologies.length === 0 || topologies.includes(job.topology);
    const sizeMatch = sizes.length === 0 || sizes.includes(job.size);
    const ingressControllerMatch = ingressControllers.length === 0 || ingressControllers.includes(job.ingressController);
    const connectivityMatch = connectivities.length === 0 || connectivities.includes(job.connectivity);
    return providerMatch && topologyMatch && sizeMatch && ingressControllerMatch && connectivityMatch;
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <h1 className="text-2xl font-bold text-white text-center">Obcerv Automated Testing Support Matrix</h1>
      </nav>
      <div className="flex">
        <div className="w-1/4 p-4">
          <Filters
            providers={providers}
            setProviders={setProviders}
            versions={versions}
            setVersions={setVersions}
            topologies={topologies}
            setTopologies={setTopologies}
            sizes={sizes}
            setSizes={setSizes}
            ingressControllers={ingressControllers}
            setIngressControllers={setIngressControllers}
            connectivities={connectivities}
            setConnectivities={setConnectivities}
          />
        </div>
        <div className="w-3/4 p-4">
          {data.filter(filterJobs).map((job, index) => (
            <Job key={index} {...job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
