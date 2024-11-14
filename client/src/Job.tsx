import Badge from "./Badge";

interface JobProps {
    provider: string;
    version: string;
    topology: string;
    size: string;
    ingressController: string;
    connectivity: string;
    jobStatusImageUrl: string;
    jobUrl: string;
}

const Job = ({ provider, version, topology, size, ingressController, connectivity, jobStatusImageUrl, jobUrl }: JobProps) => {
    const labelWidth = "120px";
    const valueWidth = "90px";
    return (
        <div className="inline-flex flex-col rounded-lg shadow-lg p-6 bg-slate-100 m-1 transition-colors duration-300 hover:bg-white">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                    <Badge label="Provider" value={provider} labelWidth={labelWidth} valueWidth={valueWidth} />
                    <Badge label="Version" value={version} labelWidth={labelWidth} valueWidth={valueWidth} />
                    <Badge label="Topology" value={topology} labelWidth={labelWidth} valueWidth={valueWidth} />
                </div>
                <div className="flex flex-col space-y-2">
                    <Badge label="Size" value={size} labelWidth={labelWidth} valueWidth={valueWidth} />
                    <Badge label="Ingress Controller" value={ingressController} labelWidth={labelWidth} valueWidth={valueWidth} />
                    <Badge label="Connectivity" value={connectivity} labelWidth={labelWidth} valueWidth={valueWidth} />
                </div>
            </div>
            <div className="flex justify-center mt-4" style={{ height: "20px" }}>
                <a href={jobStatusImageUrl}>
                    <img src={jobUrl}></img>
                </a>
            </div>
        </div>
    );
}

export default Job;