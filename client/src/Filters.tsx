import Checkbox from "./CheckBox"

interface FiltersProps {
    clusters: string[];
    setClusters: (value: string[]) => void;
};

const Filters = ({ clusters, setClusters }: FiltersProps) => {
    return (
        <Checkbox
            label="AWS Elastic Kubernetes Service (EKS)"
            checked={clusters.includes("EKS")}
            onChange={(value) => {
                if (value) {
                    setClusters([...clusters, "EKS"]);
                } else {
                    setClusters(clusters.filter(cluster => cluster !== "EKS"));
                }
            }}
        />
    )
}

export default Filters;