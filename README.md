# FileScope AI 🤖📊

## Decentralized AI-Powered Dataset Analysis & Verification Platform


FileScope AI provides dataset analysis, anomaly detection, and blockchain verification. Upload datasets, get analysis results, and store them on Filecoin.

---

## 🎯 Problem Statement

In today's data-driven world, datasets are often:
- **Unreliable**: Hidden biases, anomalies, and quality issues
- **Unverifiable**: No way to trust the analysis or detect manipulation
- **Inaccessible**: Complex tools requiring data science expertise

FileScope AI provides dataset analysis with blockchain verification.

---

## 🚀 Key Features

### 🧠 Analysis Engine
- **Quality Scoring**: Dataset evaluation (0-100 score)
- **Anomaly Detection**: Statistical outlier identification
- **Bias Assessment**: Bias detection across protected attributes
- **Data Profiling**: Schema inference and statistical analysis
- **Missing Data Analysis**: Gap detection and impact assessment
- **Correlation Discovery**: Relationship mapping between variables

### 🔗 Blockchain Integration
- **Filecoin Onchain Cloud (FOC)**: Decentralized storage with verifiable proofs
  - **Warm Storage Service**: Fast, persistent, and verifiable data storage
  - **Proof of Data Possession (PDP)**: Cryptographic proofs for data integrity
  - **Filecoin Beam**: CDN-like retrieval for fast access
  - **Programmable Payments**: Automated payment streams for ongoing storage costs
- **IPFS Integration**: Content-addressed storage with cryptographic verification (for private/free datasets)
- **Immutable Analysis**: Tamper-proof analysis results on blockchain
- **Public Verification**: Anyone can verify analysis integrity
- **Smart Contract Registry**: Dataset ownership and access control on-chain

### 📊 Visualizations
- **Charts**: Distribution plots, correlation matrices, outlier visualizations
- **Dashboards**: Exploration of analysis results
- **Bias Visualization**: Representation of detected biases
- **Quality Metrics**: Quality scorecards and improvement suggestions

### 💰 Monetization
- **Paid Datasets**: Set prices in TFIL tokens for dataset downloads
- **Earnings Tracking**: Track earnings from dataset purchases
- **Payment Rails**: Automated payment streams for FOC storage costs
- **Purchase Flow**: Checkout for buyers
- **Ownership Verification**: Blockchain-based proof of purchase

### 🔗Key SDK Features
- Easy dataset upload and analysis via simple function calls
- Access the same quality scoring, anomaly detection, and bias analysis used in the main platform
- Direct integration with Filecoin Onchain Cloud for decentralized storage
- Configurable analysis depth and visualization inclusion
- Lightweight and compatible with Python 3.8+

---

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend │    │  Django Backend │    │  AI Engine      │
│   (Next.js)     │◄──►│  (REST API)     │◄──►│  (Python/ML)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       ▼
         │                       │              ┌─────────────────┐
         │                       │              │  Analysis Stack │
         │                       │              │  • Pandas       │
         │                       │              │  • NumPy        │
         │                       │              │  • SciPy        │
         │                       │              │  • Scikit-learn │
         │                       │              └─────────────────┘
         │                       │
         │                       ▼
         │              ┌─────────────────┐
         │              │  Storage Layer  │
         │              │  • FOC (Public) │
         │              │  • IPFS (Private)│
         │              └─────────────────┘
         │
         ▼
┌─────────────────┐
│  Web3 Wallet    │
│  Integration    │
│  (AppKit/WC)    │
└─────────────────┘
         │
         ▼
┌─────────────────┐
│  Smart Contract │
│  Registry       │
│  (Ownership)    │
└─────────────────┘
```

---

## 💾 Storage Strategy

Storage strategy based on dataset visibility and monetization:

### Public Datasets → Filecoin Onchain Cloud (FOC)
- **Why FOC?** Better retrievability, verifiable proofs, and CDN-like access
- **Features:**
  - Warm Storage Service for fast, persistent storage
  - Proof of Data Possession (PDP) for data integrity
  - Filecoin Beam for CDN-like retrieval
  - No payment setup required for public datasets

### Paid Datasets → Filecoin Onchain Cloud (FOC)
- **Why FOC?** Enterprise-grade storage with programmable payments
- **Features:**
  - Same benefits as public datasets
  - Payment rails for automated storage cost management
  - USDFC token deposits and service approvals
  - One-time payment setup per wallet

### Private/Free Datasets → IPFS
- **Why IPFS?** Cost-effective for private datasets
- **Features:**
  - Content-addressed storage
  - Cryptographic verification
  - No payment setup required

---

## 🔬 AI Analysis Components

### 1. **Quality Score Calculation**
```python
def calculate_quality_score(df):
    """
    Quality assessment with 4 key dimensions:
    
    - Completeness (40%): Missing data analysis
    - Size Adequacy (30%): Statistical power assessment  
    - Data Consistency (30%): Type validation & naming quality
    """
```

**Key Algorithms:**
- Missing data pattern analysis
- Statistical power calculations
- Data type consistency validation
- Column naming quality assessment
- Duplicate detection algorithms

### 2. **Anomaly Detection Engine**
```python
def detect_anomalies(df):
    """
    Anomaly detection using:
    
    - Statistical methods (IQR, Z-score, Modified Z-score)
    - Machine learning approaches (Isolation Forest, Local Outlier Factor)
    - Domain-specific rules for categorical data
    """
```

**Implemented Methods:**
- **Isolation Forest**: Unsupervised anomaly detection for numerical data
- **Local Outlier Factor**: Density-based outlier detection
- **Statistical Outliers**: IQR, Z-score, and Grubbs' test
- **Categorical Anomalies**: Frequency-based rare category detection

### 3. **Bias Detection System**
```python
def analyze_bias(df, protected_attributes):
    """
    Bias analysis across multiple dimensions:
    
    - Demographic parity assessment
    - Equal opportunity violations
    - Statistical parity testing
    - Intersectional bias detection
    """
```

**Bias Metrics:**
- **Demographic Parity**: Equal representation across groups
- **Equal Opportunity**: Fair positive outcome rates
- **Predictive Parity**: Consistent accuracy across groups
- **Individual Fairness**: Similar individuals receive similar outcomes

### 4. **Statistics Engine**
```python
def get_detailed_statistics(df):
    """
    Statistical profiling:
    
    - Distribution analysis (normality tests, skewness, kurtosis)
    - Correlation analysis (Pearson, Spearman, Kendall)
    - Entropy calculations for information content
    - Statistical significance testing
    """
```

---

## 📦 Technology Stack

### Backend (Django)
```python
# Core AI/ML Libraries
pandas>=1.5.0           # Data manipulation and analysis
numpy>=1.21.0           # Numerical computing
scipy>=1.9.0            # Statistical analysis
scikit-learn>=1.1.0     # Machine learning algorithms
matplotlib>=3.5.0       # Data visualization
seaborn>=0.11.0         # Statistical visualization
plotly>=5.10.0          # Interactive visualizations

# Statistical Analysis
statsmodels>=0.13.0     # Advanced statistical modeling
pyod>=1.0.0            # Outlier detection algorithms
imbalanced-learn>=0.9.0 # Bias detection utilities

# Data Processing
openpyxl>=3.0.0        # Excel file processing
xlrd>=2.0.0            # Excel legacy support
chardet>=4.0.0         # Character encoding detection

# Blockchain Integration
web3>=6.0.0            # Ethereum interaction
ipfshttpclient>=0.8.0  # IPFS integration
filecoin-py>=0.1.0     # Filecoin storage API
@filoz/synapse-sdk     # Filecoin Onchain Cloud SDK
```

### Frontend (React/Next.js)
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "wagmi": "^1.4.0",           // Web3 wallet integration
    "viem": "^1.16.0",           // Ethereum interactions
    "@reown/appkit": "^1.0.0",   // Wallet connection UI
    "@filoz/synapse-sdk": "^1.0.0", // Filecoin Onchain Cloud SDK
    "recharts": "^2.8.0",        // Data visualization
    "lucide-react": "^0.263.0",  // Icons
    "tailwindcss": "^3.3.0"      // Styling
  }
}
```

---

## 🧪 AI Analysis Examples

### Quality Score Breakdown
```python
# Example output
{
  "total_score": 87.5,
  "component_scores": {
    "completeness": 35.2,    # 88% of max 40 points
    "size": 25.0,            # 83% of max 30 points  
    "consistency": 27.3      # 91% of max 30 points
  },
  "grade": "B",
  "detailed_metrics": {
    "missing_percentage": 2.3,
    "duplicate_percentage": 1.1,
    "type_consistency_score": 94.2
  }
}
```

### Anomaly Detection Results
```python
# Example output
{
  "total_anomalies": 23,
  "detection_methods": {
    "isolation_forest": 15,
    "statistical_outliers": 12,
    "local_outlier_factor": 8
  },
  "anomaly_severity": {
    "high": 5,
    "medium": 10, 
    "low": 8
  },
  "affected_columns": ["age", "income", "transaction_amount"]
}
```

### Bias Analysis Output
```python
# Example output
{
  "overall_bias_score": 0.23,  # 0 = no bias, 1 = maximum bias
  "protected_attributes": ["gender", "age_group", "ethnicity"],
  "bias_metrics": {
    "demographic_parity": 0.15,
    "equal_opportunity": 0.31,
    "predictive_parity": 0.22
  },
  "recommendations": [
    "Consider rebalancing gender representation",
    "Age group disparities detected in outcome rates"
  ]
}
```

---

## 🚀 Quick Start

### Prerequisites
- Python 3.9+
- Node.js 18+
- PostgreSQL 13+
- Redis (for caching)

### Backend Setup
```bash
# Clone repository
git clone https://github.com/your-username/filescope-ai
cd filescope-ai/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install AI/ML dependencies
pip install -r requirements.txt

# Install additional ML packages for advanced analysis
pip install pyod imbalanced-learn statsmodels

# Setup database
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

### Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Add your Web3 project ID and API endpoints

# Start development server
npm run dev
```

### Environment Variables
```env
# Backend (.env)
DATABASE_URL=postgresql://user:pass@localhost/filescope
REDIS_URL=redis://localhost:6379
FILECOIN_API_KEY=your_filecoin_api_key
IPFS_NODE_URL=https://ipfs.infura.io:5001

# Frontend (.env.local)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
FILECOIN_CLOUD_BASE_URL=https://calib2.ezpdpz.net  # FOC testnet URL
FILECOIN_CLOUD_STORAGE_PROVIDER=your_storage_provider_address
FILECOIN_CLOUD_BEAM_BASE_URL=https://beam.calibration.fildev.network
```

---

## 📊 API Documentation

### Upload & Analyze Dataset
```http
POST /api/upload/
Content-Type: multipart/form-data

Parameters:
- file: Dataset file (CSV, JSON, Excel, Parquet)
- name: Optional dataset name
- description: Optional description
- include_visualizations: boolean (default: false)
- analysis_depth: "basic" | "full" (default: "basic")
```

### Response Format
```json
{
  "success": true,
  "analysis_id": "uuid4-string",
  "status": "completed",
  "dataset_info": {
    "rows": 15420,
    "columns": 28,
    "file_type": "csv",
    "missing_percentage": 2.3
  },
  "results": {
    "quality_score": {
      "total_score": 87.5,
      "grade": "B",
      "component_scores": {...}
    },
    "basic_metrics": {...},
    "insights": [
      "High quality dataset with minimal missing data",
      "23 statistical outliers detected in 'income' column",
      "Potential bias detected in age distribution"
    ]
  },
  "visualizations": {
    "available": ["correlation_matrix", "distribution_income"],
    "included": false,
    "count": 12
  }
}
```

---

## 🔍 Supported File Formats

| Format | Extension | Max Size | Special Features |
|--------|-----------|----------|------------------|
| CSV | `.csv` | 100MB | Auto-delimiter detection |
| JSON | `.json` | 100MB | Nested structure support |
| Excel | `.xlsx`, `.xls` | 100MB | Multi-sheet analysis |
| Parquet | `.parquet` | 100MB | Optimized columnar format |
| TSV | `.tsv` | 100MB | Tab-separated values |
| Plain Text | `.txt` | 100MB | Structure auto-detection |

---

## 🎯 Use Cases

### 1. **Journalism & Media**
- Verify data sources for investigative reporting
- Detect manipulation in public datasets
- Ensure story accuracy with bias analysis

### 2. **Academic Research**
- Validate research datasets for publications
- Detect sampling biases in studies
- Ensure reproducible research with blockchain verification

### 3. **Government & NGOs**
- Publish transparent, auditable datasets
- Ensure fairness in policy-related data
- Provide public verification of official statistics

### 4. **Business Intelligence**
- Validate data quality before analysis
- Detect anomalies in business metrics
- Ensure fair AI/ML model training data

---


### Features

- Analysis engine using ML algorithms (Isolation Forest, LOF, statistical tests)
- Filecoin Onchain Cloud integration with verifiable proofs and programmable payments
- Storage routing: public datasets use FOC, private datasets use IPFS
- Monetization: sell datasets for TFIL tokens
- Bias detection, anomaly identification, and quality scoring

### Technical Details
- Quality scoring algorithm with 30+ metrics
- Anomaly detection using multiple methods
- Bias assessment across multiple fairness criteria
- Visualization generation based on data types
- Blockchain-verified analysis integrity
- Filecoin Onchain Cloud integration with Synapse SDK
- Storage routing (FOC for public/paid, IPFS for private/free)
- Programmable payment rails for storage cost management
- IndexedDB persistence for upload recovery

---

## 🔗 Demo & Links

- **Live Demo**: [https://filescope-ai.vercel.app](https://filescope-ai.vercel.app)
- **Dataset Explorer**: [https://file-scope-ai.vercel.app/explorer]

---

## 📈 Future Roadmap

### Phase 1 (Current)
- ✅ Core AI analysis engine
- ✅ Filecoin Onchain Cloud (FOC) integration
- ✅ Warm Storage Service with verifiable proofs
- ✅ Monetization features (paid datasets)
- ✅ Payment setup and automated payment rails
- ✅ Web interface with AppKit wallet integration
- ✅ Public datasets stored on FOC for better retrievability
- ✅ Private/free datasets on IPFS


### Phase 2 (Next 3 months)
- 🔄 Advanced ML models for domain-specific analysis
- 🔄 Real-time collaboration features

### Phase 3 (6 months)
- 📋 Federated learning across datasets
- 📋 DAO governance for platform development
- 📋 Mobile app with AR data visualization

---

## 📜 License


---

## 🙏 Acknowledgments

- **Filecoin Foundation** for decentralized storage infrastructure
- **Open-source ML community** for tools and libraries
- **Web3 ecosystem** for decentralized application infrastructure

---


